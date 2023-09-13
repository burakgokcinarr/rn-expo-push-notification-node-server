# React Native Expo Push Notification with your own server

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

NOT 1-): Bu çalışma gerçek bir cihaz ile test edilmesi gerektiğiden yapılan işlemler iOS üzerinden yapılmıştır. Android için Firebase Cloud Messaging (FCM) yapılandırılması gerekmektedir.  https://docs.expo.dev/push-notifications/push-notifications-setup/#get-credentials-for-development-builds adresi incelenebilir.

NOT 2-): Expo anlık bildirimlere kayıt olurken "projectId" kullanılması gerekir. Bu EAS Build ile oluşan projelerde UUID oluşturur. https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid

<p align="center">
  <img src="https://github.com/burakgokcinarr/rn-expo-push-notification-node-server/blob/main/demo2.png" alt="img" width="100%" height="null">
</p>

<p align="center">
  <img src="https://github.com/burakgokcinarr/rn-expo-push-notification-node-server/blob/main/demo1.png" alt="img" width="100%" height="null">
</p>

## Kullanılan Teknolojiler 

***** Client *****
* Expo CLI
* Expo EAS Build
* React Native
* Expo Notification
  
***** Server *****
* Express
* MongoDB 

## Bilgisayarınızda Çalıştırın

* Projeyi klonlayın

```bash
  git clone https://github.com/burakgokcinarr/rn-expo-push-notification-node-server.git
```

* Proje dizinine gidin

```bash
  cd app-project
```

* Proje için gerekli bağımlılıkları yükleyin ( Hem Client hemde Server için )

```bash
  cd client
  npm install or yarn install
  and
  cd server
  npm install or yarn install
```

* Sunucuyu Başlatın ( Server için )

```bash
  cd server
  npm run start
```
EXPO Dev-Client Yapılandırılması
```bash
  Proje içerisinde yer alan 'eas.json' konfigürasyon dosyasında uygulamanın ios/android
  dev-client olarak başlatma ayarları yapılmıştır. Bu ayarlara göre aşağıdaki kodu terminalde proje içerisinde çalıştırın.
  * iOS için ( Real Device )
  eas build --profile development --platform ios

  Terminal üzerinde oluşan link veya eas hesabınız üzerinde build listesinden oluşturulan iOS yapılandırılması QRCode taranarak iTuness üzerinden gerçek cihaza yükleme başlatacaktır.
```
<p align="center">
   <img src="https://github.com/burakgokcinarr/rn-expo-push-notification-node-server/blob/main/demo4.png" alt="img" width="100%" height="null">
</p>

Cihazlarda çalıştırın with Expo Dev-Client

```bash
  npx expo start --dev-client
```

Detaylı bilgi için https://docs.expo.dev/develop/development-builds/introduction/#what-is-an-expo-dev-client 

<p align="center">
  <img src="https://github.com/burakgokcinarr/rn-expo-push-notification-node-server/blob/main/demo3.png" alt="img" width="500" height="780">
</p>
