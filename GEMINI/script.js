document.addEventListener('DOMContentLoaded', () => {
    const petListContainer = document.getElementById('pet-list');

    // Hardcoded pet data - ALL your pet information must be here.
    // To update pets, you must edit this file directly.
    const pets = [
        {
            id: 1,
            name: 'Buddy',
            species: 'Dog',
            breed: 'Golden Retriever Mix',
            age: '2 years',
            gender: 'Male',
            description: 'Buddy is a playful and friendly dog who loves to fetch. He gets along well with children and other pets.',
            image: 'images/dog1.jpg' // Make sure you have dog1.jpg in your 'images' folder
        },
        {
            id: 2,
            name: 'Whiskers',
            species: 'Cat',
            breed: 'Domestic Shorthair',
            age: '1 year',
            gender: 'Female',
            description: 'Whiskers is a shy but affectionate cat looking for a quiet home. She enjoys sunbathing and gentle petting.',
            image: 'images/cat1.jpg' // Make sure you have cat1.jpg in your 'images' folder
        },
        {
            id: 3,
            name: 'Sunny',
            species: 'Bird',
            breed: 'Cockatiel',
            age: '6 months',
            gender: 'Unknown',
            description: 'Sunny is a cheerful little bird who loves to sing. He needs a home with someone who understands bird care.',
            image: 'images/bird1.jpg' // Make sure you have bird1.jpg in your 'images' folder
        },
        {
            id: 4,
            name: 'Shadow',
            species: 'Dog',
            breed: 'Labrador',
            age: '3 years',
            gender: 'Male',
            description: 'Shadow is a loyal and energetic Labrador who needs an active family. He loves long walks and belly rubs.',
            image: 'https://via.placeholder.com/400x250/b0e0b5/ffffff?text=Shadow+Dog' // Using a placeholder for this one
        },
        {
            id: 5,
            name: 'Luna',
            species: 'Cat',
            breed: 'Siamese',
            age: '4 years',
            gender: 'Female',
            description: 'Luna is an elegant Siamese cat who prefers a calm environment. She is independent but enjoys being near her humans.',
            image: 'https://via.placeholder.com/400x250/a2d9ab/ffffff?text=Luna+Cat' // Using a placeholder for this one
        }
    ];

    // Function to create a pet card HTML element
    function createPetCard(pet) {
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <div class="pet-card-content">
                <h3>${pet.name}</h3>
                <p><strong>Species:</strong> ${pet.species}</p>
                <p><strong>Breed:</strong> ${pet.breed}</p>
                <p><strong>Age:</strong> ${pet.age}</p>
                <p><strong>Gender:</strong> ${pet.gender}</p>
                <p>${pet.description}</p>
                <button class="btn btn-primary adopt-btn" data-pet-id="${pet.id}">Learn More / Adopt ${pet.name}</button>
            </div>
        `;
        return petCard;
    }

    // Populate the pet list by iterating over the 'pets' array
    pets.forEach(pet => {
        const card = createPetCard(pet);
        petListContainer.appendChild(card);
    });

    // Add event listeners to the "Adopt" buttons
    petListContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('adopt-btn')) {
            const petId = event.target.dataset.petId;
            const pet = pets.find(p => p.id == petId);
            if (pet) {
                alert(You are interested in adopting ${pet.name}! For a real adoption, you'd fill out an application form here or contact us.);
                // In a real application, this would open a modal, redirect to an application page, etc.
                console.log(User expressed interest in adopting Pet ID: ${petId}, Name: ${pet.name});
            }
        }
    });

    // Simple scroll behavior for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault(); // Prevent default jump
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Smooth scrolling effect
                    });
                }
            }
        });
    });

    // Handle Contact Form Submission (frontend-only)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // IMPORTANT: Prevent the browser from trying to submit the form traditionally (which would refresh the page)

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Display message to the user (since no email is actually sent)
            alert(Thank you for your message, ${name}! We've received your inquiry and will review it. (Note: This form does NOT send an actual email without a backend.));

            // Log the form data to the console for demonstration
            console.log('--- Contact Form Submission (Frontend Only) ---');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('-------------------------------------------');

            contactForm.reset(); // Clear the form fields
        });
    }

    // Handle Donate Button Click (frontend-only)
    const donateButton = document.querySelector('.donate-section .btn');
    if (donateButton) {
        donateButton.addEventListener('click', () => {
            console.log('Donate button clicked!');
            // Simulate a donation flow or redirect to a placeholder page
            const confirmDonation = confirm('Thank you for your generosity! Clicking OK will take you to a simulated donation page. (No real transaction will occur).');
            if (confirmDonation) {
                // In a real scenario, this would be a link to a secure payment gateway.
                // For frontend only, you might link to an informational page or a static form.
                window.open('https://example.com/donate-info', '_blank'); // Opens in a new tab
            }
        });
    }
});

