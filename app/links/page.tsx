"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Palette,
  Linkedin,
  Instagram,
  BookOpen,
  Code,
  FileText,
  Video,
  Globe,
  Edit2,
  Trash2,
  Plus,
  Save,
  X,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { LinkItem } from "@/lib/links-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  palette: Palette,
  linkedin: Linkedin,
  instagram: Instagram,
  book: BookOpen,
  code: Code,
  file: FileText,
  video: Video,
  globe: Globe,
};

const iconOptions = [
  { value: "github", label: "GitHub" },
  { value: "palette", label: "Palette" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "instagram", label: "Instagram" },
  { value: "book", label: "Book" },
  { value: "code", label: "Code" },
  { value: "file", label: "File" },
  { value: "video", label: "Video" },
  { value: "globe", label: "Globe" },
];

const SECTION_NONE_KEY = "__NO_SECTION__";
const NEW_SECTION_OPTION = "__NEW_SECTION__";

const normalizeSectionValue = (section?: string | null) => {
  const trimmed = section?.trim();
  return trimmed ? trimmed : null;
};

type SectionGroup = {
  key: string;
  label: string;
  sectionValue: string | null;
  links: LinkItem[];
  sectionOrder: number;
};

const groupLinksBySection = (data: LinkItem[]): SectionGroup[] => {
  const map = new Map<string, { label: string; sectionValue: string | null; links: LinkItem[] }>();

  data.forEach((link) => {
    const normalizedSection = normalizeSectionValue(link.section);
    const key = normalizedSection ?? SECTION_NONE_KEY;
    const label = normalizedSection ?? "Lainnya";
    if (!map.has(key)) {
      map.set(key, { label, sectionValue: normalizedSection, links: [] });
    }
    map.get(key)!.links.push(link);
  });

  return Array.from(map.entries())
    .map(([key, value]) => {
      const sortedLinks = [...value.links].sort((a, b) => (a.linkOrder ?? 0) - (b.linkOrder ?? 0));
      const sectionOrder =
        sortedLinks.length > 0
          ? Math.min(...sortedLinks.map((link) => link.sectionOrder ?? 0))
          : 0;

      return {
        key,
        label: value.label,
        sectionValue: value.sectionValue,
        links: sortedLinks,
        sectionOrder,
      };
    })
    .sort((a, b) => a.sectionOrder - b.sectionOrder);
};

export default function LinksPage() {
  const [linksData, setLinksData] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [newSectionName, setNewSectionName] = useState("");
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [formData, setFormData] = useState<Partial<LinkItem>>({
    id: "",
    title: "",
    url: "",
    icon: "globe",
    section: "",
    sectionOrder: 0,
    linkOrder: 0,
    preview: { text: "", domain: "", image: "" },
  });
  const [saving, setSaving] = useState(false);
  const [mobileActionsOpen, setMobileActionsOpen] = useState(false);
  const [isReordering, setIsReordering] = useState(false);
  const [isCreatingSection, setIsCreatingSection] = useState(false);
  const [customSection, setCustomSection] = useState("");

  const groupedEntries = useMemo(() => groupLinksBySection(linksData), [linksData]);
  const availableSections = useMemo(() => groupedEntries.map((entry) => entry.label), [groupedEntries]);

  // Fetch links from API
  useEffect(() => {
    fetchLinks();
  }, []);

  useEffect(() => {
    if (!editMode) {
      setMobileActionsOpen(false);
    }
  }, [editMode]);

  const generateLinkId = (title: string) => {
    const baseTitle = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    let base = baseTitle || `link-${Date.now()}`;
    let candidate = base;
    let counter = 1;

    while (linksData.some((link) => link.id === candidate)) {
      candidate = `${base}-${counter++}`;
    }

    return candidate;
  };

  const fetchLinks = async () => {
    try {
      const response = await fetch('/api/links');
      if (response.ok) {
        const data = await response.json();
        setLinksData(data);
      }
    } catch (error) {
      console.error('Error fetching links:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (link: LinkItem) => {
    setEditingId(link.id);
    setFormData({
      ...link,
      section: link.section ?? "",
      preview: link.preview || { text: "", domain: "", image: "" },
    });
    setIsCreatingSection(false);
    setCustomSection("");
    setIsAdding(false);
    setIsModalOpen(true);
  };

  const handleAdd = (defaultSection = "") => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      id: "",
      title: "",
      url: "",
      icon: "globe",
      section: defaultSection,
      sectionOrder: 0,
      linkOrder: 0,
      preview: { text: "", domain: "", image: "" },
    });
    setIsCreatingSection(false);
    setCustomSection("");
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setIsModalOpen(false);
    setFormData({
      id: "",
      title: "",
      url: "",
      icon: "globe",
      section: "",
      sectionOrder: 0,
      linkOrder: 0,
      preview: { text: "", domain: "", image: "" },
    });
    setIsCreatingSection(false);
    setCustomSection("");
  };

  const handleEditSection = (sectionName: string) => {
    setEditingSection(sectionName);
    setNewSectionName(sectionName);
  };

  const handleSaveSection = async () => {
    if (!newSectionName.trim()) {
      alert("Nama section tidak boleh kosong!");
      return;
    }

    if (editingSection && newSectionName !== editingSection) {
      try {
        // Update all links in this section
        const linksToUpdate = linksData.filter(link => link.section === editingSection);
        
        for (const link of linksToUpdate) {
          const updatedLink = { ...link, section: newSectionName };
          await fetch('/api/links', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedLink),
          });
        }
        
        await fetchLinks();
        setEditingSection(null);
        setNewSectionName("");
        alert("Section berhasil diupdate!");
      } catch (error) {
        console.error('Error updating section:', error);
        alert("Terjadi kesalahan saat mengupdate section!");
      }
    } else {
      setEditingSection(null);
      setNewSectionName("");
    }
  };

  const handleAddSection = () => {
    setIsAddingSection(true);
    setNewSectionName("");
  };

  const handleSaveNewSection = () => {
    const trimmedName = newSectionName.trim();
    if (!trimmedName) {
      alert("Nama section tidak boleh kosong!");
      return;
    }
    setIsAddingSection(false);
    setNewSectionName("");
    handleAdd(trimmedName);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.url) {
      alert("Title dan URL wajib diisi!");
      return;
    }

    if (isCreatingSection && !normalizeSectionValue(customSection)) {
      alert("Nama section baru tidak boleh kosong!");
      return;
    }

    const selectedSectionValue = isCreatingSection ? customSection : formData.section;
    const normalizedSection = normalizeSectionValue(selectedSectionValue);
    const payload: LinkItem = {
      id: formData.id || generateLinkId(formData.title),
      title: formData.title,
      url: formData.url,
      icon: formData.icon || "globe",
      section: normalizedSection ?? undefined,
      sectionOrder: formData.sectionOrder ?? 0,
      linkOrder: formData.linkOrder ?? 0,
      preview: {
        text: formData.preview?.text || "",
        domain: formData.preview?.domain || "",
        image: formData.preview?.image || "",
      },
    };

    if (isAdding) {
      const targetSectionLinks = linksData.filter(
        (link) => normalizeSectionValue(link.section) === normalizedSection
      );
      payload.linkOrder = targetSectionLinks.length;

      if (targetSectionLinks.length === 0) {
        const highestOrder = groupedEntries.length
          ? Math.max(...groupedEntries.map((entry) => entry.sectionOrder))
          : -1;
        payload.sectionOrder = highestOrder + 1;
      } else {
        payload.sectionOrder = targetSectionLinks[0].sectionOrder ?? 0;
      }
    }

    setSaving(true);
    try {
      const method = isAdding ? 'POST' : 'PUT';
      const response = await fetch('/api/links', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        await fetchLinks();
        handleCancel();
        setIsModalOpen(false);
        alert(isAdding ? "Link berhasil ditambahkan!" : "Link berhasil diupdate!");
      } else {
        const error = await response.json();
        alert(error.error || "Terjadi kesalahan!");
      }
    } catch (error) {
      console.error('Error saving link:', error);
      alert("Terjadi kesalahan saat menyimpan!");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus link ini?")) return;

    try {
      const response = await fetch(`/api/links?id=${id}`, { method: 'DELETE' });
      if (response.ok) {
        await fetchLinks();
        alert("Link berhasil dihapus!");
      } else {
        alert("Terjadi kesalahan saat menghapus!");
      }
    } catch (error) {
      console.error('Error deleting link:', error);
      alert("Terjadi kesalahan saat menghapus!");
    }
  };

  const handleMoveSection = async (sectionValue: string | null, direction: "up" | "down") => {
    if (isReordering) return;

    const currentIndex = groupedEntries.findIndex((entry) => entry.sectionValue === sectionValue);
    if (currentIndex === -1) return;

    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= groupedEntries.length) return;

    const reordered = [...groupedEntries];
    const [moved] = reordered.splice(currentIndex, 1);
    reordered.splice(targetIndex, 0, moved);

    const updates: LinkItem[] = [];
    reordered.forEach((entry, index) => {
      entry.links.forEach((link) => {
        if ((link.sectionOrder ?? 0) !== index) {
          updates.push({ ...link, sectionOrder: index });
        }
      });
    });

    if (!updates.length) return;

    setIsReordering(true);
    try {
      await Promise.all(
        updates.map((link) =>
          fetch('/api/links', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(link),
          })
        )
      );
      await fetchLinks();
    } catch (error) {
      console.error('Error reordering sections:', error);
      alert("Gagal mengatur urutan section!");
    } finally {
      setIsReordering(false);
    }
  };

  const handleMoveLink = async (sectionValue: string | null, linkId: string, direction: "up" | "down") => {
    if (isReordering) return;

    const sectionLinks = linksData
      .filter((link) => normalizeSectionValue(link.section) === sectionValue)
      .sort((a, b) => (a.linkOrder ?? 0) - (b.linkOrder ?? 0));

    const currentIndex = sectionLinks.findIndex((link) => link.id === linkId);
    if (currentIndex === -1) return;

    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= sectionLinks.length) return;

    const reordered = [...sectionLinks];
    const [moved] = reordered.splice(currentIndex, 1);
    reordered.splice(targetIndex, 0, moved);

    const updates = reordered.map((link, index) => ({ ...link, linkOrder: index }));

    setIsReordering(true);
    try {
      await Promise.all(
        updates.map((link) =>
          fetch('/api/links', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(link),
          })
        )
      );
      await fetchLinks();
    } catch (error) {
      console.error('Error reordering links:', error);
      alert("Gagal mengatur urutan link!");
    } finally {
      setIsReordering(false);
    }
  };

  const getIcon = (link: LinkItem) => {
    if (link.icon && iconMap[link.icon]) {
      const IconComponent = iconMap[link.icon];
      return <IconComponent className="w-4 h-4" />;
    }
    return <ExternalLink className="w-4 h-4" />;
  };

  const getDomain = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Last Semester Resources   
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Semua link penting kuliah
          </p>
          {/* Mobile actions */}
          <div className="flex items-center justify-center gap-2 sm:hidden relative">
            <Button
              onClick={() => setEditMode(!editMode)}
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 justify-center ${editMode ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100" : ""}`}
            >
              <Edit2 className="w-4 h-4" />
              {editMode ? "Close Edit" : "Mode Edit"}
            </Button>

            {editMode && (
              <>
                <Button
                  onClick={() => setMobileActionsOpen((prev) => !prev)}
                  variant="outline"
                  size="sm"
                  className="flex items-center justify-center w-10 h-10 p-0"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
                <AnimatePresence>
                  {mobileActionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute top-full mt-2 left-0 w-48 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg z-10"
                    >
                      <button
                        onClick={() => {
                          setMobileActionsOpen(false)
                          handleAdd()
                        }}
                        disabled={isAdding || editingId !== null || isModalOpen}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                      >
                        Tambah Link
                      </button>
                      <div className="border-t border-gray-200 dark:border-gray-800" />
                      <button
                        onClick={() => {
                          setMobileActionsOpen(false)
                          handleAddSection()
                        }}
                        disabled={isAddingSection}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                      >
                        Tambah Section
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>

          {/* Desktop / tablet actions */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-2">
            <Button
              onClick={() => setEditMode(!editMode)}
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 justify-center ${editMode ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100" : ""}`}
            >
              <Edit2 className="w-4 h-4" />
              {editMode ? "Close Edit" : "Mode Edit"}
            </Button>
            {editMode && (
              <>
                <Button
                  onClick={() => handleAdd()}
                  size="sm"
                  className="flex items-center gap-2 justify-center"
                  disabled={isAdding || editingId !== null || isModalOpen}
                >
                  <Plus className="w-4 h-4" />
                  Tambah Link
                </Button>
                <Button
                  onClick={handleAddSection}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2 justify-center"
                  disabled={isAddingSection}
                >
                  <Plus className="w-4 h-4" />
                  Tambah Section
                </Button>
                <div className="relative flex items-center gap-2 sm:hidden">
                  <Button
                    onClick={() => setMobileActionsOpen((prev) => !prev)}
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center w-10 h-10 p-0"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                  <AnimatePresence>
                    {mobileActionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute bottom-0 left-0 translate-y-full mt-2 w-48 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg z-10"
                      >
                        <button
                          onClick={() => {
                            setMobileActionsOpen(false)
                            handleAdd()
                          }}
                          disabled={isAdding || editingId !== null || isModalOpen}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hoverbg-gray-800 disabled:opacity-50"
                        >
                          Tambah Link
                        </button>
                        <div className="border-t border-gray-200 dark:border-gray-800" />
                        <button
                          onClick={() => {
                            setMobileActionsOpen(false)
                            handleAddSection()
                          }}
                          disabled={isAddingSection}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                        >
                          Tambah Section
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Add/Edit Link Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={handleCancel}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200 dark:border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {isAdding ? "Tambah Link Baru" : "Edit Link"}
                  </h3>
                  <Button
                    onClick={handleCancel}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Title *
                      </label>
                      <Input
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Nama Link"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        URL *
                      </label>
                      <Input
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Icon
                      </label>
                      <select
                        value={formData.icon || "globe"}
                        onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        {iconOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Section
                      </label>
                      <select
                        value={isCreatingSection ? NEW_SECTION_OPTION : (formData.section ?? "")}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === NEW_SECTION_OPTION) {
                            setIsCreatingSection(true);
                            setCustomSection("");
                            setFormData({ ...formData, section: "" });
                          } else {
                            setIsCreatingSection(false);
                            setCustomSection("");
                            setFormData({ ...formData, section: value });
                          }
                        }}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="">Tanpa Section</option>
                        {availableSections.map((section) => (
                          <option key={section} value={section}>
                            {section}
                          </option>
                        ))}
                        <option value={NEW_SECTION_OPTION}>+ Tambah Section Baru</option>
                      </select>
                      {isCreatingSection && (
                        <Input
                          value={customSection}
                          onChange={(e) => setCustomSection(e.target.value)}
                          placeholder="Nama section baru"
                          className="mt-2"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preview Text
                    </label>
                    <Input
                      value={formData.preview?.text || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preview: { ...formData.preview, text: e.target.value },
                        })
                      }
                      placeholder="Deskripsi singkat"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Preview Domain
                      </label>
                      <Input
                        value={formData.preview?.domain || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preview: { ...formData.preview, domain: e.target.value },
                          })
                        }
                        placeholder="example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Preview Image URL
                      </label>
                      <Input
                        value={formData.preview?.image || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preview: { ...formData.preview, image: e.target.value },
                          })
                        }
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleSave} disabled={saving} className="flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      {saving ? "Menyimpan..." : "Simpan"}
                    </Button>
                    <Button onClick={handleCancel} variant="outline" className="flex items-center gap-2">
                      <X className="w-4 h-4" />
                      Batal
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Loading links...</p>
          </div>
        )}

        {/* Add Section Form */}
        {isAddingSection && (
          <div className="mb-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <Input
                value={newSectionName}
                onChange={(e) => setNewSectionName(e.target.value)}
                placeholder="Nama Section Baru"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveNewSection();
                  if (e.key === 'Escape') {
                    setIsAddingSection(false);
                    setNewSectionName("");
                  }
                }}
              />
              <Button onClick={handleSaveNewSection} size="sm">
                <Save className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => {
                  setIsAddingSection(false);
                  setNewSectionName("");
                }}
                variant="outline"
                size="sm"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Links List - Grouped by Section */}
        {!loading && (
          <div className="space-y-8">
            {groupedEntries.map(({ key, label, sectionValue, links }, sectionIndex) => (
            <div key={key}>
              {/* Section Title */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                {editingSection === label ? (
                  <div className="flex items-center gap-2 flex-1">
                    <Input
                      value={newSectionName}
                      onChange={(e) => setNewSectionName(e.target.value)}
                      className="text-lg font-semibold"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveSection();
                        if (e.key === 'Escape') {
                          setEditingSection(null);
                          setNewSectionName("");
                        }
                      }}
                    />
                    <Button
                      onClick={handleSaveSection}
                      size="sm"
                      className="h-8"
                    >
                      <Save className="w-3 h-3" />
                    </Button>
                    <Button
                      onClick={() => {
                        setEditingSection(null);
                        setNewSectionName("");
                      }}
                      variant="outline"
                      size="sm"
                      className="h-8"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {label}
                    </h2>
                    {editMode && (
                      <div className="flex gap-1">
                        <Button
                          onClick={() => handleMoveSection(sectionValue ?? null, "up")}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          disabled={sectionIndex === 0 || isReordering}
                        >
                          <ArrowUp className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleMoveSection(sectionValue ?? null, "down")}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          disabled={sectionIndex === groupedEntries.length - 1 || isReordering}
                        >
                          <ArrowDown className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleEditSection(label)}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          disabled={isAdding || editingId !== null}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Links in this section */}
              <div className="space-y-3">
                {links.map((link, linkIndex) => (
                  <div key={link.id} className="flex items-start gap-2">
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 ${editMode ? 'pointer-events-none opacity-50' : ''}`}
                    >
                      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                        {link.preview?.image && (
                          <div className="h-32 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                            <img
                              src={link.preview.image}
                              alt={link.title}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          </div>
                        )}
                        <div className="p-4 flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-400 flex-shrink-0">
                            {getIcon(link)}
                          </div>
                          <div className="flex-1 min-w-0 space-y-2">
                            <div className="text-base font-medium text-gray-900 dark:text-white">
                              {link.title}
                            </div>
                            {link.preview?.text && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {link.preview.text}
                              </p>
                            )}
                            <div className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              {link.preview?.domain || getDomain(link.url)}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        </div>
                      </div>
                    </Link>
                    {editMode && (
                      <div className="flex flex-col gap-1 pt-4">
                        <Button
                          onClick={() => handleMoveLink(sectionValue ?? null, link.id, "up")}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          disabled={linkIndex === 0 || isReordering}
                        >
                          <ArrowUp className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleEdit(link)}
                          variant="outline"
                          size="sm"
                          className="h-9 w-9 p-0"
                          disabled={isAdding || editingId !== null}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleDelete(link.id)}
                          variant="outline"
                          size="sm"
                          className="h-9 w-9 p-0 text-red-600 hover:text-red-700"
                          disabled={isAdding || editingId !== null}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleMoveLink(sectionValue ?? null, link.id, "down")}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          disabled={linkIndex === links.length - 1 || isReordering}
                        >
                          <ArrowDown className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && linksData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Belum ada links.</p>
            <Button onClick={() => handleAdd()} className="flex items-center gap-2 mx-auto">
              <Plus className="w-4 h-4" />
              Tambah Link Pertama
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

