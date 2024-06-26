import Collapse from "@components/Collapse/Collapse";
import HeroBanner from "@components/HeroBanner/HeroBanner";
import banner_about from "@assets/banner_about.png";

export const AboutPage = () => {
  return (
    <>
      <HeroBanner
        url={banner_about}
        alt={"Bannière de la page d'accueil"}
        className="HeroBanner--picture--About"
      />
      <div className="CollapseWrapper">
        <Collapse className="CollapseStyleAbout" menuName="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
          </p>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
          </p>
        </Collapse>
        <Collapse className="CollapseStyleAbout" menuName="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse className="CollapseStyleAbout" menuName="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>
        <Collapse className="CollapseStyleAbout" menuName="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </>
  );
};
