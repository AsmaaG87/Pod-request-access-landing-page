# Frontend Mentor - Pod Request Access Landing Page

This is my solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG).

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site across mobile, tablet, and desktop screens
- See hover and focus states for all interactive elements
- Receive appropriate error messages when submitting the form with invalid email

### Links

- Solution URL: [GitHub Repository](https://github.com/AsmaaG87/Pod-request-access-landing-page)
- Live Site URL: [Live Demo](https://asmaag87.github.io/Pod-request-access-landing-page/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox for layout
- Mobile-first responsive design
- Vanilla JavaScript for form validation
- CSS pseudo-elements for decorative backgrounds

### What I Learned

This project strengthened my understanding of responsive design patterns and form validation. Key learnings include:

**Responsive background images using pseudo-elements:**
```css
.container::before {
    content: "";
    position: absolute;
    background-image: url(../images/image-host-tablet.png);
    background-size: cover;
    opacity: 0.80;
}
```

**Custom form validation with accessible error messages:**
```js
form.addEventListener("submit", function(e){
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(email === "" || !emailPattern.test(email)) {
        errorMessage.textContent = "Oops! Please check your email";
        errorMessage.classList.add("error");
        return;
    }
    form.reset();
});
```

**Handling browser autofill styling:**
```css
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #2C344B inset !important;
    -webkit-text-fill-color: #ffffff !important;
}
```

## Author

- Frontend Mentor - [@AsmaaG87](https://www.frontendmentor.io/profile/AsmaaG87)
- Twitter - [@Asmaagadel](https://x.com/Asmaagadel)

---

**Note:** This project was built as part of my journey transitioning into frontend development. Feedback and suggestions are always welcome!
