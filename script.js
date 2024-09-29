console.log("script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{ 
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline' 
        }, 300);
        
    }
})
document.getElementById('categoryFilter').addEventListener('change', function() {
    const selectedCategory = this.value;
    const filteredPosts = selectedCategory === 'all' ? posts : posts.filter(post => post.category === selectedCategory);
    
    // Render filtered posts
    const main = document.querySelector('main');
    main.innerHTML = '';
    
    filteredPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p><em>Published on ${post.date}</em></p>
            <p>${post.content}</p>
            <p>Category: <strong>${post.category}</strong></p>
        `;
        main.appendChild(article);
    });
});
// home page
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = 'Thank you for your interest! More information coming soon.';
    messageDiv.classList.remove('hidden');
});

// Function to speak a welcome message
function speakWelcomeMessage() {
    const msg = new SpeechSynthesisUtterance("Welcome to My Website. Your go-to place for amazing content.");
    window.speechSynthesis.speak(msg);
}

// Event listener for the learn more button
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = 'Thank you for your interest! More information coming soon.';
    messageDiv.classList.remove('hidden');
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('responseMessage').innerText = `Thank you, ${name}! Your message has been received.`;
    
    // Reset the form
    this.reset();
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('response').textContent = 'Thank you for your message! 😊';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('response').textContent = 'Please fill in all fields.';
    }
});



const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});