!["Logo"](https://github.com/Baqend/ionic2-starter/raw/master/ionic_baqend.png)


# Ionic 2 and Baqend Starter

With this Ionic 2 and [Baqend](https://www.baqend.com) starter kit you can build **blazingly fast hybrid apps** in no time.

This starter is based on the [Ionic2-Tabs-Starter](https://github.com/driftyco/ionic2-starter-tabs).

## HOW-TO

The easiest way to use this starter is to use the ionic cli:
 
 ```bash
 npm install -g ionic cordova
 npm install
 ionic serve
 ```

 The ionic app is already connected to a Baqend test instance. To connect it to your [own Baqend instance](https://dashboard.baqend.com/register) change the variable `appName` in the `db.service.ts` to the name of your Baqend instance.

 The app uses a `Message` object, which is defined in [the Baqend schema](http://www.baqend.com/guide/#schema-and-types). It has three string attributes: `name`, `text`, `face`.  
 
## How Baqend fits your Backend requirements

Baqend is a fully managed Backend-as-a-Service platform with a strong focus on performance and scalability ([click here for details](https://medium.baqend.com/building-a-shop-with-sub-second-page-loads-lessons-learned-4bb1be3ed07)). The [JavaScript API](http://www.baqend.com/guide/) gives you access to common backend features while the [dashboard](http://www.baqend.com/guide/#baqend-dashboard) lets you define data models and access rules as well as business logic to execute on the server side.

Baqend's feature set includes: 

* Automated Browser and CDN Caching
* Scalable Data Storage
* Realtime Streaming Queries
* Powerful Search and Query Language
* Push Notifications
* User Authentication and OAuth
* File Storage and Hosting
* Access Control on Object and Schema Level

## License
 
[MIT](https://github.com/Baqend/ionic2-starter/blob/master/LICENSE) 
