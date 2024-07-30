// Variable to store the currently selected plan
let selectedPlan = null;

// Function to select a pricing plan
function selectPlan(plan) {
    // Remove 'selected-plan' class from all pricing plans
    const pricingPlans = document.querySelectorAll('.pricing-plan');
    pricingPlans.forEach(p => {
        p.classList.remove('selected-plan');
    });

    // If the clicked plan is already selected, deselect it
    if (selectedPlan === plan) {
        selectedPlan = null;
    } else {
        // Otherwise, add 'selected-plan' class to the clicked plan
        plan.classList.add('selected-plan');
        selectedPlan = plan;
    }
}
// Function to handle purchasing a plan
function purchasePlan() {
    // Check if a plan is selected
    if (selectedPlan) {
        // Get plan name and price
        const planName = selectedPlan.querySelector('h2').textContent;
        const planPrice = selectedPlan.querySelector('.price').textContent;
        // Display purchase confirmation alert
        alert(`Thank you for choosing the ${planName} for ${planPrice}. Your purchase has been completed.`);
        // Reset selectedPlan after a short delay
        setTimeout(() => {
            selectedPlan.classList.remove('selected-plan');
            selectedPlan = null;
        }, 100);
    } else {
        // Alert if no plan is selected
        alert('Please select a plan before proceeding.');
    }
}
// locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// gsap animation
gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:3,
    ease:"power4",
    opacity:0
})
