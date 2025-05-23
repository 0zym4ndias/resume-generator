import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { X, Pencil, Trash, GripVertical } from 'lucide-react';
import { MTeckResumeData } from '@/lib/templates/mteck';

interface Experience {
  id: string;
  company: string;
  duration: string;
  role: string;
  achievements: string[];
}

interface ExperienceProps {
  data: Experience[];
  setTempData: React.Dispatch<React.SetStateAction<MTeckResumeData>>;
  setIsChangesSaved?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExperienceSection = ({ data, setTempData, setIsChangesSaved }: ExperienceProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tempEntry, setTempEntry] = useState<Experience>({
    id: '',
    company: '',
    duration: '',
    role: '',
    achievements: [],
  });

  const [newAchievement, setNewAchievement] = useState('');

  // Handle reordering experiences
  const handleReorder = (newOrder: Experience[]) => {
    setTempData((prev) => ({ ...prev, experience: newOrder }));
    if (setIsChangesSaved) setIsChangesSaved(false);
  };

  // Open modal for editing
  const handleOpenModal = (index: number) => {
    setEditingIndex(index);
    setTempEntry(data[index]);
    setModalOpen(true);
  };

  // Save experience changes
  const handleSave = () => {
    setTempData((prev) => {
      const updatedExperience = [...prev.experience];
      if (editingIndex !== null) {
        updatedExperience[editingIndex] = tempEntry;
      } else {
        updatedExperience.push({ ...tempEntry, id: Date.now().toString() });
      }
      return { ...prev, experience: updatedExperience };
    });

    setModalOpen(false);
    setEditingIndex(null);
    setTempEntry({
      id: '',
      company: '',
      duration: '',
      role: '',
      achievements: [],
    });
    setNewAchievement('');
    if (setIsChangesSaved) setIsChangesSaved(false);
  };

  // Remove an experience entry
  const handleRemove = (index: number) => {
    setTempData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
    if (setIsChangesSaved) setIsChangesSaved(false);
  };

  // Add an achievement
  const handleAddAchievement = () => {
    if (!newAchievement.trim()) return;
    setTempEntry((prev) => ({
      ...prev,
      achievements: [...prev.achievements, newAchievement],
    }));
    setNewAchievement('');
    if (setIsChangesSaved) setIsChangesSaved(false);
  };

  // Remove an achievement
  const handleRemoveAchievement = (achievementIndex: number) => {
    setTempEntry((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== achievementIndex),
    }));
    if (setIsChangesSaved) setIsChangesSaved(false);
  };

  return (
    <div className="space-y-4">
      <Reorder.Group values={data} onReorder={handleReorder} className="space-y-3">
        {data.map((entry, index) => (
          <Reorder.Item key={entry.id} value={entry}>
            <Card className="flex justify-between rounded-lg border border-gray-300 p-4 shadow-sm">
              <div className="flex gap-2">
                <GripVertical size={20} className="mt-1 cursor-grab opacity-65" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold">{entry.company || 'Untitled Company'}</h3>
                  <p className="text-sm text-gray-600">{entry.role || 'No Role Specified'}</p>
                  <p className="text-sm text-gray-500">
                    {entry.duration || 'No Duration Provided'}
                  </p>

                  {entry.achievements.length > 0 && (
                    <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
                      {entry.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button size="icon" variant="outline" onClick={() => handleOpenModal(index)}>
                  <Pencil size={18} />
                </Button>
                <Button size="icon" variant="destructive" onClick={() => handleRemove(index)}>
                  <Trash size={18} />
                </Button>
              </div>
            </Card>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {/* Add Experience Button */}
      <Dialog
        open={modalOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setEditingIndex(null);
            setTempEntry({
              id: '',
              company: '',
              duration: '',
              role: '',
              achievements: [],
            });
            setNewAchievement('');
          }
          setModalOpen(isOpen);
        }}
      >
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              setEditingIndex(null);
              setTempEntry({
                id: '',
                company: '',
                duration: '',
                role: '',
                achievements: [],
              });
              setModalOpen(true);
            }}
          >
            Add Experience
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingIndex !== null ? 'Edit Experience' : 'Add Experience'}
            </DialogTitle>
          </DialogHeader>
          <Input
            type="text"
            value={tempEntry.company}
            onChange={(e) => setTempEntry((prev) => ({ ...prev, company: e.target.value }))}
            placeholder="Company Name"
          />
          <Input
            type="text"
            value={tempEntry.role}
            onChange={(e) => setTempEntry((prev) => ({ ...prev, role: e.target.value }))}
            placeholder="Role"
          />
          <Input
            type="text"
            value={tempEntry.duration}
            onChange={(e) => setTempEntry((prev) => ({ ...prev, duration: e.target.value }))}
            placeholder="Duration (e.g., Jan 2020 - Dec 2022)"
          />

          {/* Achievements Section */}
          <div className="space-y-2">
            <p className="font-semibold">Achievements</p>
            <div className="flex flex-wrap gap-2">
              {tempEntry.achievements.map((achievement, i) => (
                <span key={i} className="flex items-center rounded-md bg-gray-200 px-2 py-1">
                  {achievement}
                  <button onClick={() => handleRemoveAchievement(i)} className="ml-2 text-red-500">
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={newAchievement}
                onChange={(e) => setNewAchievement(e.target.value)}
                placeholder="Add an achievement"
              />
              <Button onClick={handleAddAchievement} className="bg-green-500 text-white">
                Add
              </Button>
            </div>
          </div>

          <Button onClick={handleSave} className="bg-green-500 text-white">
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExperienceSection;
