import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Indo from "./id.svg";
import Eng from "./gb.svg";

export default function LeftDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();
  const isPathActive = (path) => {
    return router.pathname === path;
  };

  return (
    <>
      <nav ref={btnRef} onClick={onOpen} className="p-2 border border-white">
        <RxHamburgerMenu />
      </nav>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay className="w-screen" />
        <DrawerContent>
          <DrawerCloseButton className="text-[#32bab3]" />
          <DrawerHeader>
            <span className="text-3xl hover:scale-110 ease-in-out duration-300">
              FAJARJAYA
            </span>
          </DrawerHeader>

          <DrawerBody className="my-10">
            <ul className="flex flex-col space-y-5 text-sm">
              <li
                onClick={() => router.push("/")}
                className={`hover:cursor-pointer hover:text-[#32bab3] tracking-wider ${
                  isPathActive("/") ? "font-bold text-[#32bab3]" : ""
                }`}
              >
                HOME
              </li>
              <li
                onClick={() => router.push("/company")}
                className={`hover:cursor-pointer hover:text-[#32bab3] tracking-wider ${
                  isPathActive("/company") ? "font-bold text-[#32bab3]" : ""
                }`}
              >
                COMPANY
              </li>
              <li
                onClick={() => router.push("/products")}
                className={`hover:cursor-pointer hover:text-[#32bab3] tracking-wider ${
                  isPathActive("/products") ? "font-bold text-[#32bab3]" : ""
                }`}
              >
                PRODUCTS
              </li>
              <li
                onClick={() => router.push("/services")}
                className={`hover:cursor-pointer hover:text-[#32bab3] tracking-wider ${
                  isPathActive("/services") ? "font-bold text-[#32bab3]" : ""
                }`}
              >
                SERVICES
              </li>
            </ul>
          </DrawerBody>

          <DrawerFooter className="flex flex-row space-x-3">
            <Image
              src={Eng}
              alt="English Flag"
              className="mr-2"
              width={30}
              height={15}
            />
            <Image
              src={Indo}
              alt="Indonesian Flag"
              className="mr-2"
              width={30}
              height={15}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
