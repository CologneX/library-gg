-- CreateTable
CREATE TABLE `Member` (
    `member_id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `edited_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Member_username_key`(`username`),
    INDEX `Member_username_idx`(`username`),
    INDEX `Member_deleted_at_idx`(`deleted_at`),
    PRIMARY KEY (`member_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Collection` (
    `collection_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NULL,
    `publisher` VARCHAR(255) NULL,
    `year_published` SMALLINT NULL,
    `isbn` VARCHAR(20) NULL,
    `total_copies` INTEGER NOT NULL DEFAULT 1,
    `available_copies` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `edited_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Collection_isbn_key`(`isbn`),
    INDEX `Collection_title_idx`(`title`),
    INDEX `Collection_isbn_idx`(`isbn`),
    INDEX `Collection_author_idx`(`author`),
    INDEX `Collection_deleted_at_idx`(`deleted_at`),
    PRIMARY KEY (`collection_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Loan` (
    `loan_id` VARCHAR(191) NOT NULL,
    `member_id` VARCHAR(191) NOT NULL,
    `loan_date` DATE NOT NULL,
    `return_due_date` DATE NOT NULL,
    `return_date` DATE NULL,
    `status` ENUM('ongoing', 'returned', 'overdue') NOT NULL DEFAULT 'ongoing',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `edited_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    INDEX `Loan_status_idx`(`status`),
    INDEX `Loan_return_due_date_idx`(`return_due_date`),
    INDEX `Loan_member_id_status_idx`(`member_id`, `status`),
    INDEX `Loan_deleted_at_idx`(`deleted_at`),
    PRIMARY KEY (`loan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoanItem` (
    `loan_item_id` VARCHAR(191) NOT NULL,
    `loan_id` VARCHAR(191) NOT NULL,
    `collection_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `edited_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    INDEX `LoanItem_loan_id_collection_id_idx`(`loan_id`, `collection_id`),
    INDEX `LoanItem_deleted_at_idx`(`deleted_at`),
    PRIMARY KEY (`loan_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `session_id` VARCHAR(191) NOT NULL,
    `expires_at` DATETIME(3) NOT NULL,
    `member_id` VARCHAR(191) NOT NULL,

    INDEX `Session_member_id_idx`(`member_id`),
    PRIMARY KEY (`session_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `Member`(`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoanItem` ADD CONSTRAINT `LoanItem_loan_id_fkey` FOREIGN KEY (`loan_id`) REFERENCES `Loan`(`loan_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoanItem` ADD CONSTRAINT `LoanItem_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `Collection`(`collection_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `Member`(`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;
