"""
Configuration settings for SparkFleet Smart Meeting Assistant
"""
from pydantic_settings import BaseSettings
from typing import List, Optional
import os


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""
    
    # Application
    app_env: str = "development"
    api_host: str = "0.0.0.0"
    api_port: int = 8000
    secret_key: str
    allowed_origins: List[str] = ["http://localhost:3000"]
    
    # Database
    database_url: str
    database_pool_size: int = 10
    database_max_overflow: int = 20
    
    # AI & Transcription APIs
    openai_api_key: str
    whisper_api_key: Optional[str] = None
    
    # Zoom Integration
    zoom_client_id: str
    zoom_client_secret: str
    
    # Google Meet Integration
    google_meet_api_key: Optional[str] = None
    google_calendar_credentials: Optional[str] = None
    google_calendar_token: Optional[str] = None
    
    # GitHub Integration
    github_token: str
    github_org: str
    
    # Slack Integration
    slack_bot_token: Optional[str] = None
    slack_signing_secret: Optional[str] = None
    
    # Email Configuration
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_user: str
    smtp_password: str
    email_from: str = "noreply@sparkfleet.com"
    
    # Performance Settings
    max_concurrent_transcriptions: int = 5
    transcription_timeout_minutes: int = 30
    summary_generation_timeout_seconds: int = 120
    
    # Security & Compliance
    enable_consent_enforcement: bool = True
    encryption_key: str
    data_retention_days: int = 90
    pii_masking_enabled: bool = True
    
    # Feature Flags
    enable_real_time_transcription: bool = False
    enable_slack_integration: bool = True
    enable_email_notifications: bool = True
    enable_trend_detection: bool = True
    
    # Logging
    log_level: str = "INFO"
    log_file_path: str = "logs/app.log"
    
    class Config:
        env_file = ".env"
        case_sensitive = False


settings = Settings()
