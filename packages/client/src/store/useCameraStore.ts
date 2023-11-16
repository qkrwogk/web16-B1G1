import { create } from 'zustand';
import * as THREE from 'three';
import { CAMERA_MIN_DISTANCE } from 'constants/camera';

interface cameraState {
	currentView: THREE.Vector3;
	setCurrentView: (position: THREE.Vector3) => void;
	targetView: THREE.Mesh | null;
	setTargetView: (star: THREE.Mesh | null) => void;
	distance: number;
	setDistance: (distance: number) => void;
}

export const useCameraStore = create<cameraState>()((set) => ({
	currentView: new THREE.Vector3(0, 0, 0),
	setCurrentView: (position: THREE.Vector3) => set({ currentView: position }),
	targetView: null,
	setTargetView: (star: THREE.Mesh | null) => set({ targetView: star }),
	distance: 100,
	setDistance: (distance: number) =>
		set({
			distance: distance > CAMERA_MIN_DISTANCE ? distance : CAMERA_MIN_DISTANCE,
		}),
}));
