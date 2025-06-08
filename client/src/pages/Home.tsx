import { useStore } from '../store/store';
import { Button } from '@/components/ui/button';
import { showToast } from '@/lib/toast';

export default function Home() {
  const { count, increment, decrement } = useStore();

  const handleIncrement = () => {
    increment();
    showToast('Counter increased!', 'success');
  };

  const handleDecrement = () => {
    if (count > 0) {
      decrement();
      showToast('Counter decreased!', 'info');
    } else {
      showToast('Counter cannot go below zero', 'warning');
    }
  };

  const showRandomToast = () => {
    const types = ['success', 'error', 'info', 'warning'] as const;
    const randomType = types[Math.floor(Math.random() * types.length)];
    const messages = {
      success: 'Operation completed successfully!',
      error: 'Something went wrong!',
      info: 'Here is some information for you.',
      warning: 'This action requires your attention.'
    };
    const descriptions = {
      success: 'Your changes have been saved successfully.',
      error: 'Unable to process your request. Please try again later.',
      info: 'This is some additional information about the notification.',
      warning: 'This action cannot be undone.'
    };
    
    showToast(messages[randomType], randomType, {
      description: descriptions[randomType],
      action: randomType === 'error' ? {
        label: 'Retry',
        onClick: () => showToast('Retrying operation...', 'info')
      } : undefined
    });
  };
  
  const showActionToast = () => {
    showToast('Item moved to trash', 'success', {
      description: 'The item has been moved to the trash.',
      action: {
        label: 'Undo',
        onClick: () => showToast('Item restored', 'info')
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome to the Home Page</h1>
          <p className="text-muted-foreground">
            Try out the toast notifications below
          </p>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6 text-center">Counter: {count}</h2>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              onClick={handleDecrement}
              variant="destructive"
              size="lg"
            >
              Decrease
            </Button>
            <Button 
              onClick={handleIncrement}
              variant="default"
              size="lg"
            >
              Increase
            </Button>
          </div>
          
          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-medium">Basic Toasts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                onClick={() => showToast('This is a default toast', 'default')}
                className="w-full"
              >
                Default Toast
              </Button>
              <Button 
                variant="outline" 
                onClick={() => showToast('Success! Your action was completed.', 'success')}
                className="w-full"
              >
                Success Toast
              </Button>
              <Button 
                variant="outline" 
                onClick={() => showToast('An error occurred!', 'error')}
                className="w-full"
              >
                Error Toast
              </Button>
              <Button 
                variant="outline" 
                onClick={() => showToast('Here\'s some information.', 'info')}
                className="w-full"
              >
                Info Toast
              </Button>
              <Button 
                variant="outline" 
                onClick={showActionToast}
                className="w-full"
              >
                Action Toast
              </Button>
              <Button 
                variant="outline" 
                onClick={showRandomToast}
                className="w-full"
              >
                Random Toast
              </Button>
            </div>
            
            <h3 className="text-lg font-medium mt-8">Toast with Descriptions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                onClick={() => showToast('Success!', 'success', {
                  description: 'Your changes have been saved successfully.'
                })}
                className="w-full"
              >
                Success with Description
              </Button>
              <Button 
                variant="outline" 
                onClick={() => showToast('Error', 'error', {
                  description: 'Unable to save changes. Please try again.'
                })}
                className="w-full"
              >
                Error with Description
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>Click the buttons above to see different toast notifications</p>
        </div>
      </div>
    </div>
  );
}
