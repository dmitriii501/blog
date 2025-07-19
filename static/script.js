document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.reactions').forEach(function(reactionsBlock) {
        reactionsBlock.querySelectorAll('.react-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const postId = reactionsBlock.getAttribute('data-post-id');
                const reaction = btn.getAttribute('data-reaction');
                fetch(`/react/${postId}/${reaction}`, {method: 'POST'})
                    .then(r => r.json())
                    .then(data => {
                        reactionsBlock.querySelector('[data-reaction="like"] span').textContent = data.like;
                        reactionsBlock.querySelector('[data-reaction="fire"] span').textContent = data.fire;
                        reactionsBlock.querySelector('[data-reaction="laugh"] span').textContent = data.laugh;
                    });
            });
        });
    });
}); 