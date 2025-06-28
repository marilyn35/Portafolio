import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import imagenPrincipal from "../assets/header-img.svg"
import TrackVisibility from "react-on-screen"
import { ArrowRightCircle } from "react-bootstrap-icons"



function Banner() {
	const [numCiclo, setNumCiclo] = useState(0)
	const [borrando, setBorrando] = useState(false)
	const [texto, setTexto] = useState("")
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const [indice, setIndice] = useState(1)

	const variantes = ["Desarrollador", "Alumna", "Marilyn"]
	const periodo = 2000

	useEffect(() => {
		let ticker = setInterval(() => {
			cursor()
		}, delta)

		return () => { clearInterval(ticker) }
	}, [texto])

	function cursor() {
		let i = numCiclo % variantes.length
		let palabra = variantes[i]
		let textoActual = borrando ? palabra.substring(0, texto.length - 1) : palabra.substring(0, texto.length + 1)

		setTexto(textoActual)

		if (borrando) setDelta(prevDelta => prevDelta / 2)

		if (!borrando && textoActual === palabra) {
			setBorrando(true)
			setIndice(prevIndice => prevIndice - 1)
			setDelta(periodo)

		} else if (borrando && textoActual === "") {
			setBorrando(false)
			setNumCiclo(numCiclo + 1)
			setIndice(1)
			setDelta(500)
		} else setIndice(prevIndex => prevIndex + 1)
	
	}

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{
								({ isVisible }) => {
									return (
										<div className={isVisible ? "animate_animated animate_zoomIn" : ""}>
											<img src={imagenPrincipal} alt="Banner Principal" />
										</div>
									)
								}

							}
						</TrackVisibility>
					</Col>

					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{
								({ isVisible }) => {
									return (
										<div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
											<span className="tagline" >Bienvenido a mi portafolio</span>
											<h1>{`Hola, soy `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desarrollador", "Estudiante", "Marilyn" ]'>
												<span className="wrap">{texto}</span></span></h1>
											<p>Soy alumna de ICO en la especialidad de Desarrollor de sistemas y redes por lo tanto carezco de experiencia pero siento una gran pasion por aprender y estoy en formación para ser programadora. OuO</p>
											<button onClick={() => console.log("Conectar")}>Conectemos <ArrowRightCircle size={25} /> </button>
										</div>
									)
								}
							}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	)


}


export default Banner 