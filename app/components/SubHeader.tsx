"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "./icon/SearchIcon";
import { HiChevronDown } from "react-icons/hi";

export default function SubHeader() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["recommended"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div className="py-6 px-8 flex justify-center items-center gap-4 text-foreground border-b border-foreground-200">
      <Input
        label="Search"
        isClearable
        radius="lg"
        size="sm"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
            "border",
            "border-foreground-200",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />

      <div className="sm:flex hidden">
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize"
              size="md"
              radius="full"
              endContent={<HiChevronDown className="text-4xl" />}
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem key="recommended" color="primary">
              Recommended
            </DropdownItem>
            <DropdownItem key="curated" color="primary">
              Curated
            </DropdownItem>
            <DropdownItem key="most_appreciated" color="primary">
              Most Appreciated
            </DropdownItem>
            <DropdownItem key="most_viewed" color="primary">
              Most Viewed
            </DropdownItem>
            <DropdownItem key="most_recent" color="primary">
              Most Recent
            </DropdownItem>
            <DropdownItem key="most_discussed" color="primary">
              Most Discussed
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
