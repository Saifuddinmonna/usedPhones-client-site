
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function App() {
	return (
		<PhotoProvider>
			<PhotoView src="/1.jpg">
				<img src="/1-thumbnail.jpg" alt="" />
			</PhotoView>
		</PhotoProvider>
	);
}
