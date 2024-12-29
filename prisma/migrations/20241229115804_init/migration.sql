-- AlterTable
ALTER TABLE `Collection` ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `edited_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Loan` ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `edited_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `LoanItem` ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `edited_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Member` ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `edited_at` DATETIME(3) NULL;

-- CreateIndex
CREATE INDEX `Collection_deleted_at_idx` ON `Collection`(`deleted_at`);

-- CreateIndex
CREATE INDEX `Loan_deleted_at_idx` ON `Loan`(`deleted_at`);

-- CreateIndex
CREATE INDEX `LoanItem_deleted_at_idx` ON `LoanItem`(`deleted_at`);

-- CreateIndex
CREATE INDEX `Member_deleted_at_idx` ON `Member`(`deleted_at`);
