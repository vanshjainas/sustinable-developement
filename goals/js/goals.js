const goals = document.querySelectorAll('.goal');

goals.forEach(goal => {
    goal.addEventListener('click', () => {
        const goalId = goal.id;
        window.location.href = `/goals/${goalId}.html`;
    });
});
