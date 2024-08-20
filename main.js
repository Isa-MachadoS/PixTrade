document.addEventListener("DOMContentLoaded", function () {
    // Menu de Navegação
    const menuItems = document.querySelectorAll('.menu-item');
    const progressBar = document.querySelector('.progress-bar');
    const contents = document.querySelectorAll('.content-item');

    // Função para atualizar a barra de progresso e mostrar o conteúdo
    function activateItem(item) {
        const index = item.getAttribute('data-index');

        // Atualiza a posição e a largura da barra de progresso
        const itemWidth = item.offsetWidth;
        const newLeft = item.offsetLeft;
        
        progressBar.style.width = `${itemWidth}px`;
        progressBar.style.left = `${newLeft}px`;

        // Atualiza o estilo do item ativo
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Esconder todo o conteúdo
        contents.forEach(content => content.classList.remove('active'));
        // Mostrar o conteúdo correspondente
        const contentToShow = document.getElementById(item.getAttribute('data-content'));
        contentToShow.classList.add('active');
    }

    // Adiciona eventos de clique aos itens do menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => activateItem(item));
    });

    // Inicializa a página com o primeiro item ativo
    if (menuItems.length > 0) {
        activateItem(menuItems[0]);
    }

    // Formulário de Cadastro/Login
    const toggleLink = document.getElementById("toggle-link");
    const confirmButton = document.getElementById("confirmar");
    const formTitle = document.querySelector(".form-titulo");
    const loadingOverlay = document.getElementById("loading-overlay");
    const loadingText = document.getElementById("loading-text");
    const paisInput = document.getElementById("pais");

    toggleLink.addEventListener("click", function(e) {
        e.preventDefault();

        if (formTitle.textContent === "Se cadastre aqui") {
            formTitle.textContent = "Faça login";
            paisInput.style.display = "none";
            confirmButton.textContent = "Entrar";
            toggleLink.textContent = "Não possui uma conta? Cadastre-se";
        } else {
            formTitle.textContent = "Se cadastre aqui";
            paisInput.style.display = "block";
            confirmButton.textContent = "Começar a investir";
            toggleLink.textContent = "Já possui uma conta? Faça login";
        }
    });

    confirmButton.addEventListener("click", function(e) {
        e.preventDefault();

        loadingText.textContent = formTitle.textContent === "Se cadastre aqui" ? "Criando sua conta..." : "Acessando sua conta...";
        loadingOverlay.style.display = "flex";

        setTimeout(function() {
            loadingOverlay.style.display = "none";
            alert(formTitle.textContent === "Se cadastre aqui" ? "Conta criada com sucesso!" : "Login realizado com sucesso!");
        }, 3000); // Simula um carregamento de 3 segundos
    });

    // Adições para o Menu Sanduíche
    const toggleButton = document.querySelector(".cabecalho-toggle");
    const navMenu = document.querySelector(".cabecalho-nav");
    const navLinks = document.querySelector(".cabecalho-nav-links");
    const navBtns = document.querySelector(".cabecalho-nav-btn");

    // Função para mover os itens do .cabecalho-nav-btn para o .cabecalho-nav-links
    function moveNavItems() {
        if (navBtns.children.length > 0) {
            while (navBtns.firstChild) {
                const btnItem = navBtns.firstChild;
                btnItem.classList.add('btn-highlight'); // Adiciona uma classe para destacar os itens
                navLinks.appendChild(btnItem); // Move o item para o navLinks
            }
        }
    }

    // Função para restaurar os itens ao seu estado original
    function restoreNavItems() {
        const btnItems = document.querySelectorAll('.btn-highlight');
        btnItems.forEach(item => {
            item.classList.remove('btn-highlight'); // Remove a classe de destaque
            navBtns.appendChild(item); // Move os itens de volta para navBtns
        });
    }

    // Função para alternar o menu sanduíche
    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("ativo");
        toggleButton.classList.toggle("ativo");

        // Alterna o ícone do menu
        toggleButton.textContent = toggleButton.classList.contains("ativo") ? "✖" : "☰";

        if (navMenu.classList.contains("ativo")) {
            moveNavItems(); // Move os itens do botão para o menu principal
        } else {
            restoreNavItems(); // Restaura os itens ao fechar o menu
        }
    });

    // Verifica o tamanho da tela para ajustar a exibição do menu
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1023) {
            navMenu.classList.remove("ativo");
            toggleButton.classList.remove("ativo");
            toggleButton.textContent = "☰";
            restoreNavItems(); // Garante que os itens sejam restaurados em telas maiores
        }
    });
});





