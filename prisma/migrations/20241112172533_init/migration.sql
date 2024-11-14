-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `IDNumber` INTEGER NOT NULL,
    `mobNumber` INTEGER NOT NULL,
    `field` VARCHAR(191) NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `skill` VARCHAR(191) NOT NULL,
    `ExLevel` ENUM('BEGINNER', 'INTERMEDIATE', 'EXPERT') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
