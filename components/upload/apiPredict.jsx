import axios from "axios";
import ReactDOM from "react-dom"; // Import ReactDOM if not imported already
import Page from "../../src/app/hasilDeteksi/page"; // Adjust the import path accordingly

class ApiPredict {
  static async uploadFiles(files) {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("image", file);
    });

    try {
      const response = await axios.post(
        "http://server.sistekhagano.org/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        console.log("Files uploaded successfully!");

        ReactDOM.render(
          <Page resultImage={response.data.result_image} />,
          document.getElementById("root") // Adjust the target element ID accordingly
        );
      } else {
        console.error("Failed to upload files");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}

export default ApiPredict;
