// import resume from "../../assets/resources/MeghanBockResume.pdf";

const Resume = () => {
  function iframeLoaded() {
    var iFrameID = document.getElementById("idIframe");
    if (iFrameID) {
      iFrameID.height = "";
      iFrameID.height =
        iFrameID.contentWindow.document.body.scrollHeight + "px";
    }
  }

  return (
    


    <section id="resume-container" className="resume-container">
      <h2 className="primary-section-title">// Resume //</h2>
      <div className="resume-details flex-row">
      <div id="resume-iframe"></div>
      <script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
        <script>
            var pymParent = new pym.Parent({'resume-container', 'https://docs.google.com/document/d/e/2PACX-1vRxeuHmtsMl9ZqCxP35NUpdfO8Qbx8nBI8PinB3PHXmdhPyV7xPrtESOtM579kpD4wsz_2naBxm_OeH/pub?embedded=true'}, {});
        </script>
      </div>
    </section>
  );
};

export default Resume;
