export default {
  index(ctx) {
    ctx.body = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Linktree Clone</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
          }
          .container {
            max-width: 600px;
            width: 100%;
            padding: 20px;
          }
          #links-list {
            list-style-type: none;
            padding: 0;
          }
          .link-item {
            display: block;
            background-color: #ffffff;
            color: #333333;
            text-decoration: none;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            text-align: center;
            transition: background-color 0.3s;
          }
          .link-item:hover {
            background-color: #eeeeee;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <ul id="links-list"></ul>
        </div>
        <script>
          fetch('/api/links')
            .then(response => response.json())
            .then(data => {
              const linksList = document.getElementById('links-list');
              data.data.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.attributes.url;
                a.textContent = link.attributes.title;
                a.className = 'link-item';
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                li.appendChild(a);
                linksList.appendChild(li);
              });
            })
            .catch(error => console.error('Error fetching links:', error));
        </script>
      </body>
      </html>
    `;
  },
};