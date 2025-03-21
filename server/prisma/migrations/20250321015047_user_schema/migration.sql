-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "auth0Id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "privateKey" TEXT,
    "publicKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0Id_key" ON "User"("auth0Id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_privateKey_key" ON "User"("privateKey");

-- CreateIndex
CREATE UNIQUE INDEX "User_publicKey_key" ON "User"("publicKey");
