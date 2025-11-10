import ffmpeg from "fluent-ffmpeg"
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg"

ffmpeg.setFfmpegPath(ffmpegInstaller.path)

ffmpeg("public/assets/BlackHole.mp4")
    .outputOptions([
        "-c:v libx264", // Use H.264 codec
        "-crf 23", // Constant Rate Factor (18-28 is good)
        "-preset medium", // Encoding speed preset
        "-movflags +faststart", // Enable fast start for web playback
    ])
    .output("public/assets/BlackHole-optimized.mp4")
    .on("end", () => {
        console.log("Video optimization complete")
    })
    .run()
