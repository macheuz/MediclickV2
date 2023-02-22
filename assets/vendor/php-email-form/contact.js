function enviarFormulario() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Verifica se o nome, email e mensagem foram preenchidos
    if (name == "" || email == "" || subject == "" || message == "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    // Cria um objeto com os dados do formulário
    var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
  
    // Envia o formulário para o servidor
    fetch("URL_DO_SERVIDOR", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ocorreu um erro ao enviar o formulário.");
      }
      return response.json();
    })
    .then(data => {
      // Processa a resposta do servidor (se houver)
      alert("O formulário foi enviado com sucesso!");
    })
    .catch(error => {
      alert(error.message);
    });
  
    // Limpa os campos do formulário após o envio
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("mensagem").value = "";
  }