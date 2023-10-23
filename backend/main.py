   from flask import Flask, request
   import requests

   app = Flask(__name__)

   @app.route('/search', methods=['POST'])
   def search():
       params = request.get_json()

       // Look up the 'customer_id' using another API call.
       params['customer_id'] = lookupCustomerId(params['customer_id'])

       // Send a search request to the Rose Rocket API.
       response = requests.post('https://api.roserocket.com/search', params=params)

       return response.json()

   def lookupCustomerId(customer_id):
       // Implement the function to look up the 'customer_id'.
       pass