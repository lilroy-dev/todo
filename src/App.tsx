import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Preloader } from './components';

// Лениво загружаем страницы
const HomePage = lazy(async () => await import('./pages/Home'));
const EditPage = lazy(async () => await import('./pages/Edit'));
const CreateNewPage = lazy(async () => await import('./pages/Create'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="edit/:id" element={<EditPage />} />
          <Route path="create" element={<CreateNewPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
