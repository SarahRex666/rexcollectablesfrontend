require 'sinatra'
require 'stripe'
# This is your test secret API key.
Stripe.api_key = 'pk_test_51M2UQIC0GoTrqNnxTDjV54o5enqNBnx2uew1ozKnYSkfqJelcH5VUx9HunI8DJJNJToWpOnPXROhOQDAT3ohvk6r00QnSf1U5b'
set :static, true
set :port, 4242
post '/create-payment-intent' do
  content_type 'application/json'
  data = JSON.parse(request.body.read)
# Create a PaymentIntent with amount and currency
  payment_intent = Stripe::PaymentIntent.create(
    amount: calculate_order_amount(data['items']),
    currency: 'eur',
    automatic_payment_methods: {
      enabled: true,
    },
  )
{
    clientSecret: payment_intent['client_secret']
  }.to_json
end