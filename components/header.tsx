"use client";

import { useState } from "react";
import DesktopNav from "./header/desktop-nav";
import MobileNav from "./header/mobile-nav";
import SearchModal from "./header/search-modal";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <DesktopNav onSearchOpen={() => setIsSearchOpen(true)} />

      {/* Mobile Navigation */}
      <MobileNav onSearchOpen={() => setIsSearchOpen(true)} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
