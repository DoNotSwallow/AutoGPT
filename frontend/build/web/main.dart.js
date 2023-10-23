// Add a new function to handle upload requests.
   function handleUploadRequest(orderId, document) {
       // Create a new FormData object.
       var formData = new FormData();
       formData.append('orderId', orderId);
       formData.append('document', document);

       // Send an upload request to the backend.
       return fetch('/upload', {
           method: 'POST',
           body: formData,
       }).then(response => response.json());
   }

   // Add new functions to handle tag management requests.
   function handleAddTagRequest(loadId, tag) {
       // Send an add tag request to the backend.
       return fetch('/addTag', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({loadId, tag}),
       }).then(response => response.json());
   }

   function handleRemoveTagRequest(loadId, tag) {
       // Send a remove tag request to the backend.
       return fetch('/removeTag', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({loadId, tag}),
       }).then(response => response.json());
   }