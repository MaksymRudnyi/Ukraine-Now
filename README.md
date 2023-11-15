# Getting started with UkraineNOW for devs

# Cron - Google Apps Script

https://script.google.com/u/0/home/projects/158_iiDDhmBOU1MxUvXRkhrePxMDWikptouWDzbVm9fzuNQJrW9z6EAPr/executions

## Deploy

1. Firebase init your app
2. Login to firebase. You should be added to project Ukraine-NOW
3. `yarn build` - need to build client project. It's used as a hosting source
4. `firebase deploy` - deploy Functions and Hosting. 5. `firebase deploy --only hosting` - deploy only front-end part from client 6. `firebase deploy --only functions` - deploy functions only
