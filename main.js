//header
let a = document.querySelector(".head1")
let b = document.querySelector(".head2")
let c = document.querySelector(".head3")
let header = [a,b,c]

header.forEach(element => {
    if(element != null)
    {
        element.style.position = "fixed"
        element.style.top = "0"
        element.style.width = "100%"
        element.style.opacity = "0.9"
    }
});

//footer
let footer = document.querySelector(".footer-section")
let footerText = document.querySelector(".footer-text")
footer.style.background = "#acabab"
footer.style.display = "flex"
footer.style.height = "80px"
footerText.style.color = "#ffffff"