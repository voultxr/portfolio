# 3D Models Folder

Для загрузки реальных .glb/.gltf моделей:

1. Создай модель в **Blender** или скачай с:
   - [Sketchfab](https://sketchfab.com)
   - [Poly Haven](https://polyhaven.com)
   - [Khronos Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models)

2. Экспортируй в формате **.glb** (binary)

3. Помести файл в `public/models/`

4. Используй в компоненте:
```jsx
import { useGLTF } from '@react-three/drei'

const MyModel = () => {
  const { scene } = useGLTF('/models/your-model.glb')
  return <primitive object={scene} />
}