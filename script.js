const menuIcon = document.getElementById('menu-icon');
        const navList = document.querySelector('nav ul');
      
        menuIcon?.addEventListener('click', () => {
            navList.classList.toggle('show-menu');
        });
      
        // Hide menu on link click
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('show-menu');
            });
        });