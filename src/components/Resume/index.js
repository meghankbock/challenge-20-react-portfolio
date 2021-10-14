const Resume = () => {
  function iframeLoaded() {
    let iframe = document.getElementById('iframeId');
    console.log("this: ", iframe);
    console.log("resize");
    if (iframe) {
      iframe.height =
      iframe.contentWindow.document.body.offsetHeight + "px";
    }
  };

  return (
    


    <section id="resume-container" className="resume-container">
      <h2 className="primary-section-title">// Resume //</h2>
      <div className="resume-details flex-row">
      <iframe id="iframeId" src="https://docs.google.com/document/d/e/2PACX-1vRxeuHmtsMl9ZqCxP35NUpdfO8Qbx8nBI8PinB3PHXmdhPyV7xPrtESOtM579kpD4wsz_2naBxm_OeH/pub?embedded=true"></iframe>
      </div>
    </section>
  );
};

export default Resume;
