document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:1337/api/links/';
    const linksList = document.getElementById('links-list');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Sort the links based on the "order" field
            const sortedLinks = data.data.sort((a, b) => a.order - b.order);

            // Create and append link elements
            sortedLinks.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                // Ensure the URL has a protocol
                a.href = ensureProtocol(link.url);
                a.textContent = link.name;
                a.className = 'link-item';
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                li.appendChild(a);
                linksList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching links:', error));
});

function ensureProtocol(url) {
    if (!/^https?:\/\//i.test(url)) {
        return 'https://' + url;
    }
    return url;
}
