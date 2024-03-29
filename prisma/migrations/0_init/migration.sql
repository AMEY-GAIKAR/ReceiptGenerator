-- CreateTable
CREATE TABLE `Student` (
    `name` VARCHAR(191) NOT NULL,
    `prnNo` VARCHAR(191) NOT NULL,
    `branch` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`prnNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `transactionID` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `rollNo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`transactionID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`prnNo`) ON DELETE RESTRICT ON UPDATE CASCADE;

