 document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let isValid = true;

            // Validar email
            if (!email || !email.includes('@')) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }

            // Validar senha
            if (!password) {
                document.getElementById('passwordError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('passwordError').style.display = 'none';
            }

            if (isValid) {
                // Verificar se a senha é a correta
                if (password === 'starwars123') {
                    alert('Acesso autorizado. Bem-vindo ao Império!');
                    
                    window.location.href = 'index.html';
                } else {
                    alert('Senha incorreta. Tente novamente.');
                }
            }
        });

        // Esconder mensagens de erro quando o usuário começar a digitar
        document.getElementById('email').addEventListener('input', function () {
            document.getElementById('emailError').style.display = 'none';
        });

        document.getElementById('password').addEventListener('input', function () {
            document.getElementById('passwordError').style.display = 'none';
        });