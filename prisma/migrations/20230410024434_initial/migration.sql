-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(254) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "announcements" (
    "id" TEXT NOT NULL,
    "brand" VARCHAR(150) NOT NULL,
    "model" VARCHAR(254) NOT NULL,
    "manufacture_year" VARCHAR(4) NOT NULL,
    "fuel" VARCHAR(150) NOT NULL,
    "mileage" INTEGER NOT NULL,
    "color" VARCHAR(150) NOT NULL,
    "price_fipe" VARCHAR(50) NOT NULL,
    "price" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "announcements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "list_image" (
    "id" TEXT NOT NULL,
    "image" VARCHAR(200) NOT NULL,
    "announcement_id" TEXT NOT NULL,

    CONSTRAINT "list_image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "list_image" ADD CONSTRAINT "list_image_announcement_id_fkey" FOREIGN KEY ("announcement_id") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
