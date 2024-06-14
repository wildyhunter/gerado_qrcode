const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

// Eventos
function genereteQrcode(){
    const qrCodeInputValue = qrCodeInput.value
    if(!qrCodeInputValue) return
    
    qrCodeBtn.innerHTML = "Gerando Código..."
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrCodeInputValue}`
    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("active")
        qrCodeBtn.innerHTML = "Código Criado"
    })
    
}

qrCodeBtn.addEventListener("click", ()=>{
    genereteQrcode()
})

qrCodeInput.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        genereteQrcode()
    }
})

// Limpar área do QR code

qrCodeInput.addEventListener("keyup", (e)=>{
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerHTML = "Gerar QR code"
    }
})