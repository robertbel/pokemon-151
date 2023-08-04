-- CreateTable
CREATE TABLE "product_categories" (
    "id" SERIAL NOT NULL,
    "product_name" VARCHAR(255),
    "number_of_packs" SMALLINT,
    "set_id" INTEGER,

    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "product_cat_id" INTEGER,
    "webshop_id" INTEGER,
    "url" VARCHAR(255),
    "pulled_date" TIMESTAMP(6),
    "current_price" DECIMAL,

    CONSTRAINT "new_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webshops" (
    "id" SERIAL NOT NULL,
    "webshop_name" VARCHAR(255),
    "webshop_url" VARCHAR(255),

    CONSTRAINT "webshops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sets" (
    "id" SERIAL NOT NULL,
    "set_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "sets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "sets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "new_products_product_cat_id_fkey" FOREIGN KEY ("product_cat_id") REFERENCES "product_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "new_products_webshop_id_fkey" FOREIGN KEY ("webshop_id") REFERENCES "webshops"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

