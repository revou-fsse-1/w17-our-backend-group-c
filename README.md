[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3GK8eW1r)

# SIMERCE APP 🛒

![](/assets/simerce-app.png)

Simerce is an acronym from Simple E-commerce App. This app was inspired from one of Mr.Dandi's friends that has a smalll groceries shop. He is wondering if his products he is selling can be put into an app like e-commerce but with much smaller scope.

## Team Member 🤝

---

1. Dandi Rizky Eko Saputro
2. Arya Immanuel

## Deployment 🚀

---

Link: https://w17-our-backend-group-c-production.up.railway.app

## Documentation 📷

### Database Diagram

![Diagram Database](assets/diagram.png)

### Endpoints

| HTTP   |           Endpoint            |                    Description |
| :----- | :---------------------------: | -----------------------------: |
| POST   |      /auth/register/user      |                  Register User |
| POST   |       /auth/login/user        |                     Login User |
| POST   |     /auth/register/admin      |                 Register Admin |
| POST   |       /auth/login/admin       |                    Login Admin |
| GET    |       /auth/profileuser       |              Show User Profile |
| GET    |            /users             |                 Show All Users |
| GET    |          /users/{id}          |                Show User by Id |
| DELETE |          /users/{id}          |             Delete Users by Id |
| PUT    |  /users/deletewishlists/{id}  |          Delete Wishlist by Id |
| GET    |         /products/all         |              Show All Products |
| GET    |        /products/{id}         |            Show Products by Id |
| PUT    |        /products/{id}         |          Update Products by Id |
| PATCH  |        /products/{id}         |           Patch Products by Id |
| DELETE |        /products/{id}         |          Delete Products by Id |
| GET    |           /products           |                Search Products |
| POST   |           /products           |                   Add Products |
| GET    |          /wishlists           |                Search Wishlist |
| POST   |          /wishlists           |                Create Wishlist |
| GET    |        /wishlists/{id}        |            Show Wishlist by Id |
| PATCH  |        /wishlists/{id}        |        To Update Wishlist Name |
| DELETE |        /wishlists/{id}        |         Delete Wishlists by Id |
| PUT    |  /wishlists/addproduct/{id}   |      Add Products to Wishlists |
| PUT    | /wishlists/deleteproduct/{id} | Delete Prodcuts from Wishlists |
| GET    |            /admins            |                    Show Admins |
| DELETE |         /admins/{id}          |              Show Admins by Id |

## Technologies 💻

---

- NestJS
- Swagger
- Typescript
- PrismaORM
- PostgreSQL
- Docker
- Railway
- GCP

## Support 🙌

---

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
