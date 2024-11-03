import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async () => {
  const session = await getServerSession();

  const splitName = session!.user!.name!.split("");
  const firstName = splitName[0];
  const lastName = splitName[1];

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email: session?.user?.email!,
      },
    });

    if (findUser) {
      return NextResponse.json(
        {
          message: "Такой пользователь уже существует",
        },
        {
          status: 409,
        }
      );
    }

    const data = await prisma.user.create({
      data: {
        email: session?.user?.email!,
        password: "",
        firstName: firstName,
        lastName: lastName,
        photo: session?.user?.image!,
      },
    });
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      }
    );
  }
};
