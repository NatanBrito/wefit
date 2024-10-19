/*
  Warnings:

  - You are about to alter the column `email` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(80)`.
  - A unique constraint covering the columns `[cnpj]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cellPhone]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Customer` MODIFY `email` VARCHAR(80) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Customer_cnpj_key` ON `Customer`(`cnpj`);

-- CreateIndex
CREATE UNIQUE INDEX `Customer_cpf_key` ON `Customer`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `Customer_cellPhone_key` ON `Customer`(`cellPhone`);

-- CreateIndex
CREATE UNIQUE INDEX `Customer_phone_key` ON `Customer`(`phone`);

-- CreateIndex
CREATE UNIQUE INDEX `Customer_email_key` ON `Customer`(`email`);
