let usuarios = []

function adicionarUsuario(nome, idade, email) {
    const usuario = {
        nome,
        idade,
        email
    }

    if (idade > 0) {
        usuarios.push(usuario)
        console.log(`Usuário ${nome} adicionado com sucesso!`)
    } else {
        console.log("Idade inválida.\nIdade precisa ser um número positivo.")
    }
    
    listarUsuarios(usuarios);
}

function listarUsuarios(usuarios) {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.")
        return
    } else {
        console.log(`Usuários cadastrados: ${usuarios.length}`)
        usuarios.forEach((usuario, index) => {
            console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`)
        })
    }
}

adicionarUsuario('Miguel', 17 , 'faziomiguel0@gmail.com')
