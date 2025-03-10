import { useState } from 'react';
import { Plus, Clock } from 'lucide-react';
import { TimerList } from './components/TimerList';
import { AddTimerModal } from './components/AddTimerModal';
import { Toaster } from 'sonner';
import { useTimerStore } from './store/useTimerStore';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { timers } = useTimerStore(); // Get timers from the store

  const handleAddTimer = () => {
    setIsModalOpen(true); // Open the modal to add a new timer
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Timers</h1>
          </div>
          <button
            onClick={handleAddTimer}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg mt-6"
          >
            <Plus className="w-5 h-5" />
            Add Timer
          </button>
        </div>

        {/* Timer List */}
        <TimerList timers={timers} />

        {/* Add Timer Modal */}
        <AddTimerModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}

export default Home;
