import { Controller } from '@nestjs/common';
import { WishlistService } from './wishlist.service';

@Controller('wishlists')
export class WishlistController {
    constructor(private wishlistService: WishlistService) {}

    // get all wishlist

    // get wishlist by id + show relation between wishlist and product

    // create wishlist

    // update wishlist (PATCH)

    // delete wishlist
}
