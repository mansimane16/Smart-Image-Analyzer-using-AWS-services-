A web application to detect text, labels, and faces from images using AWS Rekognition, Translate, and Comprehend — with automatic translation support for text detection.

🚀 Features : 
📄 Text Detection — Extracts readable text from images.
🏷️ Label Detection — Identifies objects, scenes, and concepts.
🙂 Face Detection — Detects faces, age ranges, gender, and emotions.
🌍 Translation — Translates detected text into your selected language (only for text detection).
🖼️ Bounding Boxes — Draws boxes around detected faces and labels.
🖥️ Modern UI — Built with React.js + Tailwind CSS.

🛠️ Tech Stack : 
Frontend	           Backend	              Cloud Services
React.js (Next.js)	 AWS Lambda (Python)	  Rekognition, Translate, Comprehend, API Gateway

📷 Screenshots
![image](https://github.com/user-attachments/assets/e7bd445f-97af-4905-99b3-68df8dbb662b)
![image](https://github.com/user-attachments/assets/2da2a54b-896c-406d-99a3-0a26bfcfebc4)
![image](https://github.com/user-attachments/assets/dbc7b100-fe6d-449d-a0f0-df88454839b0)
![image](https://github.com/user-attachments/assets/dbdc9bc6-f42b-4aae-8d98-b8b78d34d739)
![image](https://github.com/user-attachments/assets/aca896e3-7831-4ae7-aff6-a364791478ec)
![image](https://github.com/user-attachments/assets/578ffae0-6a4f-45dc-ada0-0a24c1fdeef0)
![image](https://github.com/user-attachments/assets/f83e1374-aea7-4a70-93ee-b2babf1886ec)
![image](https://github.com/user-attachments/assets/f66bcc15-bafd-41ed-9e89-802f53fac6e5)
![image](https://github.com/user-attachments/assets/894e1ed2-15c1-4aed-94bc-b03697961ea8)
![image](https://github.com/user-attachments/assets/766b3d13-a229-4870-9caa-956f8acbd262)

🔗 AWS Services Used : 
Amazon Rekognition → Detects text, labels, and faces in uploaded images.
Amazon Translate → Translates detected text into the selected target language.
Amazon Comprehend → Detects source language when needed (through AWS Translate).
AWS Lambda → Serverless compute to process images and call AWS services.
API Gateway → Creates REST API endpoints to connect frontend and backend.

📄 Important Notes :
This app does not use custom Machine Learning models — it purely uses AWS managed services.
Translation is available only for text detection.
Your AWS Lambda function must have appropriate IAM permissions to access Rekognition, Translate, and Comprehend.

🧠 Future Ideas : 
Store uploads and results in S3.
Add user authentication using AWS Cognito.
Improve error handling and fallback mechanisms.
Support multiple file uploads.

📝 License
This project is licensed under the MIT License.

