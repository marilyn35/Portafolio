import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { TrackVisibility } from "react-on-screen"
import { TarjetaProyecto } from "./TarjetaProyecto"

import projImg1 from "../assets/Projects/proy1.png";
import projImg2 from "../assets/Projects/proy2.png";
import projImg5 from "../assets/Projects/proy5.png";
import projImg8 from "../assets/Projects/proy8.png";


export default function Proyectos () {
	const proyectos = [
		{
			titulo: "Proyecto 1",
			descripcion: "Descrición del proyecto 1",
			imagen: projImg1
		},
		{
			titulo: "Proyecto 2",
			descripcion: "Descrición del proyecto 2",
			imagen: projImg2
		},
		{
			titulo: "Proyecto 3",
			descripcion: "Descrición del proyecto 3",
			imagen: projImg5
		},
		{
			titulo: "Proyecto 4",
			descripcion: "Descrición del proyecto 4",
			imagen: projImg8
		}
	]
	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						
						<h2>Proyectos</h2>
						<p>A continuación veras algunos de los proyectos que he realizado</p>

						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">Sección 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Sección 2</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Sección 3</Nav.Link>
								</Nav.Item>
							</Nav>

							<Tab.Content id="slideInUp">
								<Tab.Pane eventKey="first">
									<Row>
									{
										proyectos.map(( proyecto, indice ) => {
											return (
												<TarjetaProyecto
													key={indice}
													proyecto={proyecto}
												/>
											)
										})
									}
									</Row>
								</Tab.Pane>

								<Tab.Pane eventKey="second">
									<p>Sección 2: Aquí puedes agregar contenido para la sección 2</p>
								</Tab.Pane>

								<Tab.Pane eventKey="third">
									<p>Sección 3: Aquí puedes agregar contenido para la sección 3</p>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
		</section>
	)

}