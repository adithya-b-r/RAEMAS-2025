import { useEffect } from "react";

export const CallForPapers = () => {
  useEffect(() => {
    const guidelines = document.getElementById("guidelines");

    const pTags = guidelines.querySelectorAll("p");
    const h5Tags = guidelines.querySelectorAll("h5");

    pTags.forEach((pTag) => {
      pTag.classList.add("text-gray-600", "my-3", "font-semibold", "text-[1rem]");
    });

    h5Tags.forEach((h5Tag) => {
      h5Tag.classList.add("text-gray-800", "my-5", "font-bold", "text-lg");
    }, []);
  }, [])

  return (
    <section className="flex flex-col w-full py-10 h-[100vh] bg-gray-100 text-gray-800 items-center overflow-scroll">
      <h1 className="font-bold md:text-5xl text-4xl md:mx-0 mx-4 tracking-wide ">Guidelines to Authors</h1>

      <div id="guidelines" className="my-8 md:mx-24 mx-4">
        <p>Below are some useful instructions to assist the authors to submit their papers for RAEMAS 2025: </p>

        <h5>ORIGINALITY OF SUBMITTED PAPERS:</h5>
        <p>Papers submitted to 2025 **** CONECCT shall contain original work by the author(s) that have not been published or submitted for publication elsewhere. The **** anti- plagiarism policy is applicable to all submissions. The author(s) are solely responsible for any plagiarized submission.</p>

        <h5>PAPER SUBMISSION:</h5>
        <p>All papers are required to be prepared and submitted in the **** Standard two -column conference format of A4 size in English. Papers must be four to six pages in length, including texts, Figures, photographs and references. Literature review only papers are not accepted. Any submitted paper that exceeds six pages will be rejected. The first page must include the title of the paper, author(s), affiliations, address and text. Please do not include page numbers on submitted documents. Failing to conform to the standard format will result in rejection. Detailed format information is available in **** Website. Click here</p>

        <p>The authors are required to use the standard **** manuscript template for conferences. The Microsoft Word and LaTeX templates can be downloaded from **** conference template page: Click here</p>

        <h5>PAPER UPLOAD:</h5>
        <p>All papers must be submitted in PDF Document via CMT Platform</p>
        <p>The submitting authors may be required to create a CMT account before uploading the paper (if the submitting author does not have a CMT account). While uploading the paper, the authors should provide the title of the paper, an abstract of no more than 250 words in the respective text boxes in the paper submission page.</p>
        <p>Please note that all accepted papers that are registered and presented in the conference will be sent for possible inclusion in **** Xplore. The authors must agree to the **** copyright conditions and sign the **** copyright form as part of the online submission process. All submitted papers will be peer reviewed by the Technical Progam Committees (TPC).</p>


      </div>
    </section>
  );
};